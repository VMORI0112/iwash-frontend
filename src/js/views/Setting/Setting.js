import React from 'react';
import styles from './Setting.module.css';

const Setting = () => {
    return (
        <section className={styles.section}>
            <h1>Setting</h1>
            <div className="container">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-user"></i>&nbsp;Update Profile</a>
                    <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-hand-holding-usd"></i>&nbsp;My Wallet</a>
                    <a href="#" class="list-group-item list-group-item-action"><i class="fas fa-history"></i>&nbsp;My Washing History</a>
                    <a href="#" class="list-group-item list-group-item-action">&nbsp;Back to Presentation</a>
                </div>
            </div>
        </section>
    );
};

export default Setting;