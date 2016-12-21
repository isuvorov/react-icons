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

var MdCameraAlt = function (_React$Component) {
    _inherits(MdCameraAlt, _React$Component);

    function MdCameraAlt() {
        _classCallCheck(this, MdCameraAlt);

        return _possibleConstructorReturn(this, (MdCameraAlt.__proto__ || Object.getPrototypeOf(MdCameraAlt)).apply(this, arguments));
    }

    _createClass(MdCameraAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 28.4q3.4 0 5.9-2.5t2.5-5.9-2.5-5.9-5.9-2.5-5.9 2.5-2.5 5.9 2.5 5.9 5.9 2.5z m-5-25h10l3 3.2h5.4q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h5.4z m-0.3 16.6q0-2.2 1.6-3.7t3.7-1.6 3.8 1.6 1.5 3.7-1.5 3.8-3.8 1.5-3.7-1.5-1.6-3.8z' })
                )
            );
        }
    }]);

    return MdCameraAlt;
}(React.Component);

exports.default = MdCameraAlt;
module.exports = exports['default'];