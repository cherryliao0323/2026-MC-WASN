import React from 'react';

const styles = {
    footer: {
        backgroundColor: '#5d2f0a',
        color: '#ecf0f1',
        padding: '30px',
        borderRadius: '8px',
        marginTop: '40px',
        textAlign: 'center',
    }
};

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>國立臺灣大資訊工程學系 MC/WASN 2025工作小組</p>
            <p>聯絡人：廖芝勤　E-mail：mc.wasn.2025@gmail.com</p>
            <p>&copy; MC/WASN 2025</p>
        </footer>
    );
}

export default Footer;
