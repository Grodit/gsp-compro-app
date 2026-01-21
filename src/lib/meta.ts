export function getTitleHead(pageTitle?: string) {
  const APP_NAME = 'Grodit Studio Production'
  return pageTitle ? `${pageTitle} - ${APP_NAME}` : APP_NAME
}
