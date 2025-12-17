import {FileNode} from "../model/types";

export const MOCK_FILES: FileNode[] = [
    {
        id: '1',
        name: 'Projects',
        type: 'folder',
        size: 0,
        updatedAt: '2024-03-10T10:00:00Z',
        starred: false,
    },
    {
        id: '2',
        name: 'Marketing Assets',
        type: 'folder',
        size: 0,
        updatedAt: '2024-03-11T14:30:00Z',
        starred: true,
    },
    {
        id: '3',
        name: 'Q1_Report_Final.pdf',
        type: 'document',
        size: 2450000, // ~2.4 MB
        updatedAt: '2024-03-12T09:15:00Z',
        starred: true,
    },
    {
        id: '4',
        name: 'dashboard_mockup_v2.png',
        type: 'image',
        size: 4500000, // ~4.5 MB
        updatedAt: '2024-03-12T11:20:00Z',
        starred: false,
    },
    {
        id: '5',
        name: 'backup_2024.zip',
        type: 'archive',
        size: 156000000, // ~156 MB
        updatedAt: '2024-03-09T18:00:00Z',
        starred: false,
    },
    {
        id: '6',
        name: 'intro_video.mp4',
        type: 'video',
        size: 45000000, // ~45 MB
        updatedAt: '2024-03-08T16:45:00Z',
        starred: false,
    },
];