'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';
import { ProjectProps } from '@/utils/types';

export default function index({index, title, manageModal, link}: ProjectProps) {

    return (
        <Link href={link} aria-label={title} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2>{title}</h2>
            <p>Development</p>
        </Link>
    )
}
