const MapEmbed_banquet = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '90%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.5963264915263!2d121.52774267609901!3d25.01382913910204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98c9f01e7af%3A0xa0f269377fe2fc46!2z5YWs6aSo6Jaq5YOR5ZyS5rC05rqQ5ama5a605pyD6aSo!5e0!3m2!1szh-TW!2stw!4v1749827768161!5m2!1szh-TW!2stw"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};
export default MapEmbed_banquet;
