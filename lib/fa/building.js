'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var FaBuilding = function (_React$Component) {
    _inherits(FaBuilding, _React$Component);

    function FaBuilding() {
        _classCallCheck(this, FaBuilding);

        return _possibleConstructorReturn(this, (FaBuilding.__proto__ || Object.getPrototypeOf(FaBuilding)).apply(this, arguments));
    }

    _createClass(FaBuilding, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.5 0q0.6 0 1 0.4t0.4 1v37.2q0 0.5-0.4 1t-1 0.4h-28.6q-0.6 0-1-0.4t-0.4-1v-37.2q0-0.6 0.4-1t1-0.4h28.6z m-18.6 6.4v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5z m0 5.7v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5z m0 5.8v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.6z m0 5.7v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5z m-2.8 7.1v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.5q0.3 0 0.5-0.2t0.2-0.5z m11.4 28.5v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-7.2q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h7.2q0.3 0 0.5-0.2t0.2-0.5z m0-11.4v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.4 0-0.6 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.6 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m5.7 22.8v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.4q0-0.4-0.2-0.6t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.6v1.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m0-5.7v-1.5q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v1.5q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z' })
                )
            );
        }
    }]);

    return FaBuilding;
}(React.Component);

exports.default = FaBuilding;
module.exports = exports['default'];