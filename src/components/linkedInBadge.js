  import React, { useEffect } from 'react'

  function LinkedInBadge() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
        <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="miguel-espina"
            data-version="v1"
        >
            <a
            className="badge-base__link LI-simple-link"
            href="https://linkedin.com/in/miguel-espina"/>
        </div>
        </div>
    );
}

export default LinkedInBadge;