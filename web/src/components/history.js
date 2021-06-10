import React from "react";

import * as styles from "./history.module.css";

const History = () => {
  return(
    <>
        <h1 className={styles.history_title}>A Breif History</h1>
        <div className={styles.history_container}>
            <div className={styles.history_card_grid1}>
                <div className={styles.history_card_flex}>
                    <div className={styles.history_card_block}>
                        <span className={styles.history_card_company}>The Farm</span>
                        <span className={styles.history_card_role}>Intern</span>
                    </div>
                    <div>
                        <div className={styles.history_card_when}>18-19</div>
                    </div>
                </div>
            </div>
            <div className={styles.history_card_grid2}>
                <div className={styles.history_card_flex}>
                    <div className={styles.history_card_block}>
                        <span className={styles.history_card_company}>IT-Högskolan</span>
                        <span className={styles.history_card_role}>Student</span>
                    </div>
                    <div>
                        <div className={styles.history_card_when}>19-21</div>
                    </div>
                </div>
            </div>
            <div className={styles.history_card_grid3}>
                <div className={styles.history_card_flex}>
                    <div className={styles.history_card_block}>
                        <span className={styles.history_card_company}>Bravomedia</span>
                        <span className={styles.history_card_role}>Intern</span>
                    </div>
                    <div>
                        <div className={styles.history_card_when}>20-21</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default History;
