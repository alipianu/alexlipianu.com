$(document).ready(function () {
    (function () {
        let footer = document.createElement('footer');
        footer.innerHTML = `
            <div>
                <ul>
                    <li>
                        <a aria-label="Email" href="mailto:alexlipianu@live.ca?subject=Website%20Redirect" rel="noopener">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a aria-label="LinkedIn" href="https://ca.linkedin.com/in/alipianu" target="_blank" rel="noopener">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a aria-label="GitHub" href="https://github.com/alipianu" target="_blank" rel="noopener">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a aria-label="CodePen" href="https://codepen.io/alipianu/" target="_blank" rel="noopener">
                            <i class="fa fa-codepen" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <p>@ ${(new Date()).getFullYear()} Alexander Lipianu</p>
                <p>All rights reserved</p>
            </div>`;
        
        // add footer
        document.body.appendChild(footer);

        // remove footer-generation script
        let script = document.getElementById('footer');
        script.parentNode.removeChild(script);
    }());
});