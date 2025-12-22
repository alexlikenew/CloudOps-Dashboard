import { useEffect, useState, useCallback } from 'react'
import { useAuth } from '../../../app/providers/AuthProvider'
import { supabase } from '../../../shared/api/supabase'

const MAX_LIMIT_BYTES = 30 * 1024 * 1024

export default function useStorageStats() {
	const { session } = useAuth()
	const [percentageSpace, setPercentageSpace] = useState<number>(0)
	const [usedSpaceBytes, setUsedSpaceBytes] = useState<number>(0)
	const [loading, setLoading] = useState<boolean>(true)

	const fetchSize = useCallback(async () => {
		if (!session?.user) return
		setLoading(true)

		try {
			const { data, error } = await supabase.from('files').select('size').eq('user_id', session.user.id)

			if (error) throw error

			const totalBytes = data?.reduce((acc, file) => acc + (file.size || 0), 0) || 0

			const percentage = MAX_LIMIT_BYTES > 0 ? (totalBytes / MAX_LIMIT_BYTES) * 100 : 0

			setUsedSpaceBytes(totalBytes)
			setPercentageSpace(Math.min(percentage, 100))
		} catch (error) {
			console.error('Error calculating storage:', error)
		} finally {
			setLoading(false)
		}
	}, [session])

	useEffect(() => {
		fetchSize()
	}, [fetchSize])

	const usedSpaceMB = (usedSpaceBytes / (1024 * 1024)).toFixed(2)

	return {
		usedSpaceBytes,
		usedSpaceMB,
		percentageSpace,
		maxLimit: MAX_LIMIT_BYTES,
		loading,
		refetch: fetchSize,
	}
}
