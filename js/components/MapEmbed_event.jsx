const MapEmbed = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '90%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6223626491633!2d121.53411317537594!3d25.012944877830094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98aa2eabfa5%3A0xd5d5d639129dae83!2z6ZuG5oCd5Y-w5aSn5pyD6K2w5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1742393234505!5m2!1szh-TW!2stw"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default MapEmbed;
