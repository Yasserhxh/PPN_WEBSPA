import {useIntl} from 'react-intl'
import {MenuItem} from './MenuItem'
import {MenuInnerWithSub} from './MenuInnerWithSub'
import {MegaMenu} from './MegaMenu'

export function MenuInner() {
  const intl = useIntl()
  return (
    <>
      <MenuItem title={intl.formatMessage({id: 'MENU.DASHBOARD'})} to='/dashboard' />
      <MenuItem title='Layout Builder' to='/builder' />
      <MenuInnerWithSub
        title='Niveau 2'
        isMega
        to='/crafted'
        menuPlacement='bottom-start'
        menuTrigger={`{default:'click', lg: 'hover'}`}
      >
										{/*begin:Pages menu*/}
										<div className="menu-active-bg px-8 px-lg-0">
											{/*begin:Tabs nav*/}
											<div className="d-flex w-100 overflow-auto">
												<ul
													className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
													{/*begin:Nav item*/}
													<li className="nav-item mx-lg-1">
														<a className="nav-link py-3 py-lg-6 active text-active-primary"
															href="#" data-bs-toggle="tab"
															data-bs-target="#kt_app_header_menu_pages_pages">classe 
															A</a>
													</li>
													{/*end:Nav item*/}
													{/*begin:Nav item*/}
													<li className="nav-item mx-lg-1">
														<a className="nav-link py-3 py-lg-6 text-active-primary" href="#"
															data-bs-toggle="tab"
															data-bs-target="#kt_app_header_menu_pages_account">classe
															B</a>
													</li>
													{/*end:Nav item*/}
													{/*begin:Nav item*/}
													<li className="nav-item mx-lg-1">
														<a className="nav-link py-3 py-lg-6 text-active-primary" href="#"
															data-bs-toggle="tab"
															data-bs-target="#kt_app_header_menu_pages_authentication">classe
															C</a>
													</li>
													{/*end:Nav item*/}
												</ul>
											</div>
											{/*end:Tabs nav*/}
											{/*begin:Tab content*/}
											<div className="tab-content py-4 py-lg-8 px-lg-7">
												{/*begin:Tab pane*/}
												<div className="tab-pane active w-lg-350px"
													id="kt_app_header_menu_pages_pages">
													{/*begin:Row*/}
													<div className="row">
														{/*begin:Col*/}
														<div className="col-lg-12 mb-3">
															{/*begin:Menu item*/}
															<div className="menu-item p-0 m-0">
																{/*begin:Menu link*/}
																<a href="#0"
																	className="menu-link check justify-content-between">
																	<span
																		className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																		<i
																			className="ki-duotone ki-element-11 text-primary fs-1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																			<span className="path3"></span>
																			<span className="path4"></span>
																		</i>
																	</span>
																	<span className="d-flex flex-column"
																		style={{marginLeft: "-45px"}}>
																		<span className="fs-6 fw-bold text-gray-800">Accéder
																			au cours</span>
																		<span className="fs-7 fw-semibold text-muted">24
																			Élèves</span>
																	</span>
																	<div
																		className="progress w-100px h-7px bg-success menu-progress bg-opacity-50 mt-7">
																		<div className="progress-bar bg-success"
																			role="progressbar" style={{width: "50%"}}></div>
																	</div>
																</a>

																{/*end:Menu link*/}
															</div>
															{/*end:Menu item*/}
														</div>
														{/*end:Col*/}


													</div>
													{/*end:Row*/}
												</div>
												{/*end:Tab pane*/}
												{/*begin:Tab pane*/}
												<div className="tab-pane w-lg-350px" id="kt_app_header_menu_pages_account">
													{/*begin:Row*/}
													<div className="row">
														{/*begin:Col*/}
														<div className="col-lg-12 mb-3">
															{/*begin:Menu item*/}
															<div className="menu-item p-0 m-0">
																{/*begin:Menu link*/}
																<a href="#0"
																	className="menu-link check justify-content-between">
																	<span
																		className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																		<i
																			className="ki-duotone ki-element-11 text-primary fs-1">
																			<span className="path1"></span>
																			<span className="path2"></span>
																			<span className="path3"></span>
																			<span className="path4"></span>
																		</i>
																	</span>
																	<span className="d-flex flex-column"
																		style={{marginLeft: "-45px"}}>
																		<span className="fs-6 fw-bold text-gray-800">Accéder
																			au cours</span>
																		<span className="fs-7 fw-semibold text-muted">20
																			Élèves</span>
																	</span>
																	<div
																		className="progress w-100px h-7px bg-warning bg-opacity-50 mt-7">
																		<div className="progress-bar bg-warning"
																			role="progressbar" style={{width: "15%"}}></div>
																	</div>
																</a>
																{/*end:Menu link*/}
															</div>
															{/*end:Menu item*/}
														</div>
														{/*end:Col*/}


													</div>
													{/*end:Row*/}
												</div>
												{/*end:Tab pane*/}
												{/*begin:Tab pane*/}
												<div className="tab-pane w-lg-350px"
													id="kt_app_header_menu_pages_authentication">
													{/*begin:Row*/}
													<div className="row">
														{/*begin:Col*/}
														<div className="col-lg-12 mb-3">
															{/*begin:Menu link*/}
															<a href="#0"
																className="menu-link check justify-content-between">
																<span
																	className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																	<i
																		className="ki-duotone ki-element-11 text-primary fs-1">
																		<span className="path1"></span>
																		<span className="path2"></span>
																		<span className="path3"></span>
																		<span className="path4"></span>
																	</i>
																</span>
																<span className="d-flex flex-column"
																	style={{marginLeft: "-45px"}}>																		
																	<span className="fs-6 fw-bold text-gray-800">Accéder au
																		cours</span>
																	<span className="fs-7 fw-semibold text-muted">18
																		Élèves</span>
																</span>
																<div
																	className="progress w-100px h-7px bg-primary bg-opacity-50 mt-7">
																	<div className="progress-bar bg-primary"
																		role="progressbar" style={{width: "576%"}}></div>
																</div>
															</a>
															{/*end:Menu link*/}
														</div>
														{/*end:Col*/}


													</div>
													{/*end:Row*/}
												</div>
												{/*end:Tab pane*/}
											</div>
											{/*end:Tab content*/}
										</div>
										{/*end:Pages menu*/}
      </MenuInnerWithSub>

      <MenuInnerWithSub title='Apps' to='/apps' menuPlacement='bottom-start' menuTrigger='click'>
        {/* PAGES */}
        <MenuInnerWithSub
          title='Chat'
          to='/apps/chat'
          icon='message-text-2'
          hasArrow={true}
          menuPlacement='right-start'
          menuTrigger={`{default:'click', lg: 'hover'}`}
        >
          <MenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
          <MenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
          <MenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
        </MenuInnerWithSub>
        <MenuItem icon='abstract-28' to='/apps/user-management/users' title='User management' />
      </MenuInnerWithSub>

      <MenuInnerWithSub
        isMega={true}
        title='Layouts'
        to='/mega-menu'
        menuPlacement='bottom-start'
        menuTrigger='click'
      >
        <MegaMenu />
      </MenuInnerWithSub>
    </>
  )
}
