/**
 * Margin configuration for chart padding
 */
export interface ChartMargin {
  top: number
  right: number
  bottom: number
  left: number
}

/**
 * Dimensions for chart container
 */
export interface ChartDimensions {
  width: number
  height: number
  innerWidth: number
  innerHeight: number
}

/**
 * Generic data point structure
 */
export interface DataPoint {
  [key: string]: string | number | Date | null | undefined
}

/**
 * Axis configuration
 */
export interface AxisConfig {
  show?: boolean
  label?: string
  tickCount?: number
  tickFormat?: (value: unknown) => string
  gridLines?: boolean
}

/**
 * Chart configuration base
 */
export interface ChartConfig {
  margin?: Partial<ChartMargin>
  responsive?: boolean
  colors?: string[]
  xAxis?: AxisConfig
  yAxis?: AxisConfig
}
