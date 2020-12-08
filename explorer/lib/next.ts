export function singleQueryParamValue(
  queryParamValue: string | string[] | undefined,
  defaultValue: string = ''
): string {
  return (Array.isArray(queryParamValue) ? queryParamValue[0] : queryParamValue) || defaultValue
}
