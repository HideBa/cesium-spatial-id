import {
  CallbackProperty,
  Cartesian2,
  Cartesian3,
  CesiumWidget,
  Ellipsoid,
  Entity,
  VoxelPrimitive,
  PositionProperty,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Viewer,
  SceneMode,
} from "cesium";
import { SpatialIdSpace } from "@spatial-id/javascript-sdk";

export type Space = SpatialIdSpace;

export type Context = {
  position?: Cartesian3;
  screenPosition: Cartesian2;
  initialPosition?: PositionProperty;
  initialScreenPosition: Cartesian2;
};

export type Options = {};

export default class CesiumSpatialId {
  viewer: Viewer | CesiumWidget;
  space?: Space;
  options?: Options;

  private _voxelPrimitive?: VoxelPrimitive;
  private _entity?: Entity;
  // private _callbackProperty = new CallbackProperty(
  //   () => this._position ?? this._initialPosition,
  //   false,
  // );

  constructor(viewer: Viewer | CesiumWidget, space: Space, options?: Options) {
    this.viewer = viewer;
    this.space = space;
    this.options = options;
  }

  addSpace() {
    const primitive = new VoxelPrimitive();
    this._voxelPrimitive = primitive;
  }

  removeSpace() {
    // do something
  }

  get voxelPrimitive() {
    return this._voxelPrimitive;
  }
}
