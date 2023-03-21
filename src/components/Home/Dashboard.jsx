import React from 'react';

const Dashboard = () => {
  return (
    <>
    <div class="block-content mt-1">
        <div>
          <div>
            <div style={{ background: 'url(https://image.freepik.com/free-vector/mobile-user-banner_82984-210.jpg) 0% 0% / cover no-repeat', height: '250px' }}>
            </div>
            <div class="px-4 py-5 md:px-6 lg:px-8 surface-section">
              <div class="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between relative" style={{ marginTop: '-2rem', top: '-70px', marginBottom: '-70px' }}>
                <div>
                  <div class="mb-3 surface-card shadow-2 flex align-items-center justify-content-center" style={{ width: '140px', height: '140px', borderRadius: '10px' }}>
                    <img src="https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png" alt="Imae" width="70" height="70" />
                  </div>
                  <div class="text-900 text-3xl font-medium mb-3">User Management System</div>
                  <p class="mt-0 mb-3 text-700 text-xl">User Dashboard Page.</p>
                  <div class="text-600 font-medium"><span>Website | India </span>
                  </div>
                </div>
                <div class="mt-3 lg:mt-0">
                  <button aria-label="Follow" class="p-button p-component p-button-outlined mr-2">
                    <span class="p-button-icon p-c p-button-icon-left pi pi-plus-circle"></span>
                    <span class="p-button-label p-c">Follow</span>
                    <span role="presentation" class="p-ink"></span>
                  </button>
                  <button aria-label="Website" class="p-button p-component mr-2">
                    <span class="p-button-icon p-c p-button-icon-left pi pi-link"></span>
                    <span class="p-button-label p-c">Website</span>
                    <span role="presentation" class="p-ink"></span>
                  </button>
                  <button class="p-button p-component p-button-outlined p-button-rounded p-button-icon-only">
                    <span class="p-button-icon p-c pi pi-ellipsis-v">
                    </span>
                    <span class="p-button-label p-c">&nbsp;</span>
                    <span role="presentation" class="p-ink"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Dashboard