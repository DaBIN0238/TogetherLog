import * as assets from './figmaAssets'
import {
  PhoneContent,
  WavingHand,
  CreateMeetingPreview,
  VotePreview,
  RecordPreview,
  TimelinePreview,
} from './PreviewScreens'

// Scale the icon slot while preserving the original SVG's intrinsic dimensions.
function Asset({ src, width, height, alt = '', className = '' }) {
  const intrinsic = assets.assetSizes[src]
  const w = width ?? intrinsic?.[0]
  const h = height ?? intrinsic?.[1] ?? w

  return (
    <span
      className={`asset ${className}`}
      style={{ width: w, height: h }}
    >
      <img
        src={src}
        alt={alt}
        width={intrinsic?.[0] ?? w}
        height={intrinsic?.[1] ?? h}
        style={
          intrinsic
            ? {
                transform: `scale(${w / intrinsic[0]}, ${
                  h / intrinsic[1]
                })`,
              }
            : undefined
        }
      />
    </span>
  )
}

function PrimaryButton({
  children = '무료로 시작하기',
  className = '',
}) {
  return (
    <button
      type="button"
      className={`primary-button ${className}`}
    >
      {children}
    </button>
  )
}

function Brand({ footer = false }) {
  return (
    <div
      className={`brand ${
        footer ? 'brand-footer' : ''
      }`}
    >
      <Asset
        src={assets.img1}
        width={footer ? 66.186 : 79}
        height={footer ? 51.506 : 61}
      />
      <span>Together Log</span>
    </div>
  )
}

export function Header() {
  return (
    <header className="site-header">
      <Brand />

      <nav aria-label="주 메뉴">
        <a href="#service">서비스 소개</a>

        <a href="#features">기능 소개</a>

        <a href="#support">고객센터</a>

        <button
          type="button"
          className="login-link"
        >
          [ 로그인 ]
        </button>
      </nav>
    </header>
  )
}

const journey = [
  {
    label: 'PLAN',
    description: '모임을 만들고',
    icon: assets.imgBoxiconsCalendarPlus,
  },
  {
    label: 'VOTE',
    description: '함께 가능한 일정을 정하고',
    icon: assets.imgMaterialSymbolsFactCheckOutlineRounded,
  },
  {
    label: 'RECORD',
    description: '모임의 순간을 기록해요',
    icon: assets.imgStreamlineUltimatePenWriteBold,
  },
]

export function Hero() {
  return (
    <section
      className="hero-section"
      id="service"
      aria-labelledby="hero-title"
    >
      <img
        className="hero-friends"
        src={assets.img3}
        alt="바다를 바라보며 함께 앉아 있는 친구들"
        width="690"
        height="345"
      />

      <div className="hero-copy">
        <h1 id="hero-title">
          함께 정하고, 함께 기록하는
          <br />
          우리만의 모임 공간
        </h1>

        <p className="hero-description">
          모임 일정부터 추억 기록까지,
          <br />
          함께하는 모든 순간을 한곳에
        </p>

        <ol className="journey">
          {journey.map((step, i) => (
            <li
              className="journey-step"
              key={step.label}
            >
              <div className="journey-label">
                <strong>
                  {i + 1}. {step.label}
                </strong>

                <Asset
                  src={step.icon}
                  width={32}
                  height={32}
                />
              </div>

              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div
        className="phone-preview"
        role="img"
        aria-label="Together Log 로그인 화면 예시"
      >
        <PhoneContent />

        <img
          className="phone-frame"
          src={assets.imgIPhone13ProStarlight}
          alt=""
          width="416"
          height="737"
        />
      </div>

      <div className="hero-cta">
        <PrimaryButton />
      </div>
    </section>
  )
}

const menuItems = [
  ['홈', assets.imgComponent20],

  ['모임 일정', assets.imgUisSchedule2],

  [
    '모임 관리',
    assets.imgFluentPeopleAdd24Filled,
  ],

  ['타임라인', assets.imgComponent19],

  ['알림', assets.imgGroup3],

  ['마이페이지', assets.imgAntDesignUserOutlined],
]

function Sidebar() {
  return (
    <aside
      className="dashboard-sidebar"
      aria-label="서비스 메뉴 예시"
    >
      <ul>
        {menuItems.map(([label, icon]) => (
          <li key={label}>
            <span className="sidebar-icon">
              <Asset
                src={icon}
                width={
                  label === '알림'
                    ? 31.4
                    : 43.669
                }
                height={
                  label === '알림'
                    ? 38.7
                    : 43.669
                }
              />
            </span>

            <span>{label}</span>
          </li>
        ))}
      </ul>

      <PrimaryButton className="create-button">
        모임 만들기
      </PrimaryButton>
    </aside>
  )
}

function SectionHeading({
  children,
  recent = false,
}) {
  return (
    <div
      className={`section-heading ${
        recent ? 'recent-heading' : ''
      }`}
    >
      <h3>{children}</h3>

      <button
        className="view-all"
        type="button"
      >
        전체보기
        <Asset
          src={
            recent
              ? assets.imgComponent8
              : assets.imgComponent6
          }
        />
      </button>
    </div>
  )
}

const meetings = [
  {
    title: '여름 제주 여행',
    people: '4명 참여',
    date: '7월 22일 예정',
    image: assets.imgEllipse14,
    notice:
      '아직 투표하지 않은 일정이 있어요 !',
    tone: 'lavender',
  },

  {
    title: '고기 파티',
    people: '7명 참여',
    date: '8월 13일 예정',
    image: assets.imgEllipse15,
    tone: 'blue',
  },
]

function MeetingCard({ meeting }) {
  return (
    <article
      className={`meeting-card ${meeting.tone}`}
    >
      <div className="meeting-summary">
        <Asset
          src={meeting.image}
          width={65}
          height={65}
        />

        <div className="meeting-info">
          <h4>{meeting.title}</h4>

          <div className="meeting-meta">
            <Asset src={assets.imgGroup7} />

            <span>{meeting.people}</span>

            <Asset
              src={assets.imgComponent14}
              className="calendar-icon"
            />

            <span>{meeting.date}</span>
          </div>

          <span className="status-badge">
            일정 투표 진행 중
          </span>
        </div>
      </div>

      {meeting.notice && (
        <p className="meeting-notice">
          {meeting.notice}
        </p>
      )}

      <button
        type="button"
        className="vote-button"
      >
        투표 하러 가기
        <Asset src={assets.imgComponent7} />
      </button>
    </article>
  )
}

export function DashboardPreview() {
  return (
    <section
      className="dashboard-section"
      aria-label="Together Log 대시보드 미리보기"
    >
      <div className="dashboard-header">
        <div className="dashboard-brand">
          <Asset
            src={assets.img1Navigation2Menu}
            width={40}
            height={40}
          />

          <h2>Together Log</h2>
        </div>

        <div className="dashboard-tools">
          <div className="dashboard-tool-icons">
            <Asset
              src={assets.imgComponent4}
            />

            <Asset
              src={assets.imgFrame188}
            />
          </div>

          <Asset
            src={assets.imgEllipse13}
            width={38}
            height={38}
          />

          <span>지은님</span>

          <Asset
            src={assets.imgComponent5}
            className="profile-chevron"
          />
        </div>
      </div>

      <div className="dashboard-body">
        <Sidebar />

        <div className="dashboard-main">
          <div className="greeting">
            <h3>
              지은님, 오늘도 함께해요!
            </h3>

            <WavingHand />
          </div>

          <p className="greeting-description">
            우리의 소중한 모임을 한 눈에
            확인하세요.
          </p>

          <div className="meetings-section">
            <SectionHeading>
              진행 중인 모임
            </SectionHeading>

            <div className="meeting-cards">
              {meetings.map((meeting) => (
                <MeetingCard
                  key={meeting.title}
                  meeting={meeting}
                />
              ))}
            </div>

            <Asset
              src={assets.imgFrame104}
              className="carousel-dots"
            />
          </div>

          <div className="recent-section">
            <SectionHeading recent>
              최근 올라온 기록
            </SectionHeading>

            <div className="recent-record">
              <Asset
                src={assets.imgEllipse16}
                width={59.136}
                height={59.136}
              />

              <div>
                <p>
                  지은님이 사진을 올렸어요
                </p>

                <span>
                  제주 감귤 농장 체험 · 방금 전
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: assets.imgGroup2,
    kind: 'people',
    text: (
      <>
        함께할 친구들과
        <br />
        모임을 만들어요
      </>
    ),
  },

  {
    icon: assets.imgUisSchedule1,
    kind: 'calendar',
    text: (
      <>
        모두가 가능한 날짜를
        <br />
        쉽게 정해요
      </>
    ),
  },

  {
    icon: assets.imgF7Photo,
    kind: 'photo',
    text: (
      <>
        사진과 이야기를
        <br />
        함께 남겨요
      </>
    ),
  },

  {
    icon: assets.imgIcRoundSchedule1,
    kind: 'clock',
    text: (
      <>
        함께한 순간을
        <br />
        시간순으로 돌아봐요
      </>
    ),
  },
]

export function CoreFeatures() {
  return (
    <section
      className="core-features"
      id="features"
      aria-labelledby="features-title"
    >
      <div className="features-intro">
        <h2 id="features-title">
          핵심기능
        </h2>

        <p>
          모임의 시작부터 기록까지
          <br />
          한곳에서 간편하게
        </p>
      </div>

      <div className="feature-cards">
        {features.map((feature) => (
          <article
            className="feature-card"
            key={feature.kind}
          >
            <div
              className={`feature-icon ${feature.kind}`}
            >
              <Asset src={feature.icon} />
            </div>

            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const details = [
  {
    id: 'create',
    number: '01',
    title: '모임 생성',
    badge: assets.imgEllipse8,
    description: (
      <>
        모임 이름, 장소, 날짜 범위
        <br />
        등을 설정하고 함께할 멤버를
        <br />
        초대해요.
      </>
    ),
    Preview: CreateMeetingPreview,
  },

  {
    id: 'vote',
    number: '02',
    title: '일정 투표',
    badge: assets.imgEllipse3,
    description: (
      <>
        멤버들이 가능한 날짜를 선택
        <br />
        하면 가장 많은 날짜를 한 눈에
        <br />
        확인할 수 있어요.
      </>
    ),
    Preview: VotePreview,
  },

  {
    id: 'record',
    number: '03',
    title: '모임 기록',
    badge: assets.imgEllipse2,
    description: (
      <>
        모임이 끝난 후 사진과
        <br />
        이야기를 남겨 우리만의
        <br />
        추억을 기록해요.
      </>
    ),
    Preview: RecordPreview,
  },

  {
    id: 'timeline',
    number: '04',
    title: '타임 라인',
    badge: assets.imgEllipse1,
    description: (
      <>
        함께한 모든 모임을 시간순으로
        <br />
        모아 추억을 한 눈에
        <br />
        돌아볼 수 있어요.
      </>
    ),
    Preview: TimelinePreview,
  },
]

function FeatureDetail({ detail }) {
  const { Preview } = detail

  return (
    <article
      className={`feature-detail feature-detail-${detail.id}`}
    >
      <div className="detail-copy">
        <div className="detail-heading">
          <span className="number-badge">
            <Asset src={detail.badge} />

            <span>
              {detail.number}
            </span>
          </span>

          <h3>{detail.title}</h3>
        </div>

        <p className="detail-description">
          {detail.description}
        </p>

        <button
          type="button"
          className="detail-link"
        >
          자세히 보기

          <Asset
            src={
              detail.id === 'create'
                ? assets.imgComponent3
                : assets.imgComponent1
            }
          />
        </button>
      </div>

      <Preview />
    </article>
  )
}

export function FeatureDetails() {
  return (
    <section
      className="feature-details"
      aria-labelledby="detail-title"
    >
      <h2 id="detail-title">
        <span>Together Log</span> 이렇게
        관리해요!
      </h2>

      {details.map((detail) => (
        <FeatureDetail
          key={detail.id}
          detail={detail}
        />
      ))}
    </section>
  )
}

export function CtaBanner() {
  return (
    <section
      className="cta-banner"
      aria-labelledby="cta-title"
    >
      <h2 id="cta-title">
        지금, 우리만의 모임을
        시작해보세요!
      </h2>

      <PrimaryButton />
    </section>
  )
}

const footerGroups = [
  {
    title: '서비스',
    items: [
      '서비스 소개',
      '기능 소개',
      '요금 안내',
    ],
  },

  {
    title: '고객 지원',
    items: [
      '고객센터',
      '자주 묻는 질문',
      '문의하기',
    ],
  },

  {
    title: '회사',
    items: [
      '회사 소개',
      '이용약관',
      '개인정보처리방침',
    ],
  },
]

export function Footer() {
  return (
    <footer
      className="site-footer"
      id="support"
    >
      <div className="footer-brand">
        <Brand footer />

        <p>
          모임 일정부터 추억 기록까지,
          <br />
          함께하는 모든 순간을 한곳에
        </p>

        <div className="social-icons">
          <Asset
            src={assets.imgThesvgKakaotalk}
            alt="카카오톡"
          />

          <Asset
            src={assets.imgThesvgNaver}
            alt="네이버"
          />

          <Asset
            src={assets.imgBiGoogle}
            alt="구글"
          />
        </div>
      </div>

      <div className="footer-groups">
        {footerGroups.map((group) => (
          <div
            className="footer-group"
            key={group.title}
          >
            <h2>{group.title}</h2>

            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  {item ===
                    '서비스 소개' ||
                  item === '기능 소개' ? (
                    <a
                      href={
                        item ===
                        '서비스 소개'
                          ? '#service'
                          : '#features'
                      }
                    >
                      {item}
                    </a>
                  ) : (
                    <button type="button">
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}