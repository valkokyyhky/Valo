'use client';

import { BrandLoading } from '@lobehub/ui/brand';
import CircleLoading from '../CircleLoading';
import styles from './index.module.css';

interface BrandTextLoadingProps {
  debugId: string;
}

const BrandTextLoading = ({ debugId }: BrandTextLoadingProps) => {
  const showDebug = process.env.NODE_ENV === 'development' && debugId;

  return (
    <div className={styles.container}>
      <div aria-label="Loading" className={styles.brand} role="status">
        {/* 方案A：如果 BrandLoading 支持直接传字符串 */}
        <BrandLoading size={40} text="Valo" />
        
        {/* 方案B：如果上面的不生效，用这个组合方案 */}
        {/* <CircleLoading />
        <span style={{ marginLeft: 12, fontWeight: 600, fontSize: 16 }}>Valo</span> */}
      </div>

      {showDebug && (
        <div className={styles.debug}>
          <div className={styles.debugRow}>
            <code>Debug ID:</code>
            <span className={styles.debugTag}>
              <code>{debugId}</code>
            </span>
          </div>
          <div className={styles.debugHint}>only visible in development</div>
        </div>
      )}
    </div>
  );
};

export default BrandTextLoading;
