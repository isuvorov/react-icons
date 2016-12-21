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

var FaRoad = function (_React$Component) {
    _inherits(FaRoad, _React$Component);

    function FaRoad() {
        _classCallCheck(this, FaRoad);

        return _possibleConstructorReturn(this, (FaRoad.__proto__ || Object.getPrototypeOf(FaRoad)).apply(this, arguments));
    }

    _createClass(FaRoad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.1 22.1v-0.1l-0.5-6.7q-0.1-0.2-0.3-0.4t-0.4-0.2h-3.9q-0.3 0-0.5 0.2t-0.2 0.4l-0.5 6.7v0.1q0 0.2 0.2 0.4t0.4 0.2h5.1q0.2 0 0.4-0.2t0.2-0.4z m15.7 9.7q0 1.5-0.9 1.5h-14.6q0.2 0 0.4-0.2t0.2-0.5l-0.4-5.3q-0.1-0.3-0.3-0.5t-0.4-0.2h-5.7q-0.3 0-0.5 0.2t-0.2 0.5l-0.4 5.3q0 0.3 0.2 0.5t0.4 0.2h-14.6q-1 0-1-1.5 0-1.1 0.6-2.4l8.6-21.7q0.2-0.4 0.6-0.7t0.8-0.3h7q-0.3 0-0.5 0.2t-0.2 0.5l-0.3 4q0 0.3 0.2 0.4t0.4 0.2h3.5q0.2 0 0.4-0.2t0.2-0.4l-0.3-4q-0.1-0.3-0.3-0.5t-0.4-0.2h7q0.4 0 0.8 0.3t0.5 0.7l8.7 21.7q0.5 1.3 0.5 2.4z' })
                )
            );
        }
    }]);

    return FaRoad;
}(React.Component);

exports.default = FaRoad;
module.exports = exports['default'];