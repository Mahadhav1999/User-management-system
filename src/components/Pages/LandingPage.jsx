import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <>
            <div className=''>
            <div className="grid grid-nogutter text-800 bg-hero"
            >
                <div className="col-12 md:col-6 p-6 text-center md:text-left">
                    <section>
                        <h2 class="font-bold text-3xl sm:text-7xl mt-0 mb-4">
                            User  Management <br /> 
                            System.
                        </h2>
                        <p className="mt-0 mb-4 text-700 line-height-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ipsa iste quia voluptatibus molestiae illum facere sed. Eius numquam harum laudantium quae sint atque consequatur unde.</p>

                        <div className="flex gap-3">
                            <Link to='/auth/admin/login' className="no-underline">
                            <button aria-label="Get Started" type="button" class="p-button p-component z-2">
                                <span class="p-button-icon p-c p-button-icon-right pi pi-box mx-2">

                                </span>
                                <span class="p-button-label p-c">Proceed as Admin </span>
                                <span role="presentation" class="p-ink" style={{ height: '150.969px', width: '150.969px', top: '22.3646px', left: '87.3333px' }}>

                                </span>
                        </button>

                            </Link>
                       <Link to="/auth/user/login" className="no-underline">
                       <button aria-label="Documentation" type="button" class="p-button p-component p-button-outlined z-2">
                                <span class="p-button-label p-c">Proceed as User</span>
                                <span role="presentation" class="p-ink" style={{ height: '158.333px', width: '158.333px', top: '12.3644px', left: '106.365px' }}>
                                </span>
                        </button>
                       </Link>
                        </div>
                    </section>
                </div>
            </div>
            </div>
        </>

    )
}

export default LandingPage