import './settings.css'

type IconProps = {
  className?: string
}

const StoreIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 10h16v10H4V10Z" />
    <path d="M3 5h18l-1 5H4L3 5Z" />
    <path d="M8 20v-6h8v6M3 10h18M6 5V3h12v2" />
  </svg>
)

const BadgeIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2 2.2 2.2 3.1-.5.8 3 2.8 1.4-1.4 2.8 1.4 2.8-2.8 1.4-.8 3-3.1-.5L12 22l-2.2-2.2-3.1.5-.8-3-2.8-1.4 1.4-2.8-1.4-2.8 2.8-1.4.8-3 3.1.5L12 2Z" />
    <path d="m8.5 12 2.2 2.2 4.8-5" />
  </svg>
)

const CloudIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.2-1.8A5 5 0 0 0 7 18Z" />
    <path d="m9 13 2 2 4-5" />
  </svg>
)

const ShieldIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2 5 5v6c0 4.6 2.8 8.8 7 10.5 4.2-1.7 7-5.9 7-10.5V5l-7-3Z" />
    <path d="M12 4.5v14" />
  </svg>
)

const statusCards = [
  {
    title: 'Business Verified',
    text: 'Your identity documentation was approved on Dec 12, 2023.',
    icon: BadgeIcon,
    tone: 'verified',
  },
  {
    title: 'Infrastructure Live',
    text: 'NexusStore Cloud synchronization is currently active and healthy.',
    icon: CloudIcon,
    tone: 'blue',
  },
  {
    title: 'Secure Connection',
    text: 'End-to-end encryption is enabled for all transactional data.',
    icon: ShieldIcon,
    tone: 'blue',
  },
]

export const Generalsettings = () => {
  return (
    <div className="settings-shell">
      <main className="settings-main">
        <div className="settings-container">
          <header className="settings-page-header">
            <div>
              <h1>Settings</h1>
              <p>Manage your store profile and team permissions.</p>
            </div>

            <div className="settings-tabs" role="tablist" aria-label="Settings sections">
              <button className="settings-tab active" type="button">General Store Profile</button>
            </div>
          </header>

          <section className="business-card" aria-labelledby="business-title">
            <div className="business-card-header">
              <h2 id="business-title">Business Information</h2>
              <StoreIcon className="business-card-icon" />
            </div>

            <form className="business-form">
              <label className="field-group">
                <span>Store Name</span>
                <input type="text" name="storename" />
              </label>

              <label className="field-group">
                <span>Official Contact Email</span>
                <input type="email" name="contactemail" />
              </label>

              <label className="field-group">
                <span>Phone Number</span>
                <input type="tel" name="phonenumber" />
              </label>

              <label className="field-group">
                <span>Physical Address</span>
                <input type="text" name="address" />
              </label>

              <button className="save-button" type="submit">Save Changes</button>
            </form>
          </section>

          <section className="status-grid" aria-label="Store status">
            {statusCards.map((card) => {
              const Icon = card.icon

              return (
                <article className={`status-card ${card.tone}`} key={card.title}>
                  <Icon className="status-icon" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </section>

          <footer className="settings-footer">
            <strong>NexusStore</strong>
            <span>© 2024 NexusStore Infrastructure. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
          </footer>
        </div>
      </main>
    </div>
  )
}
