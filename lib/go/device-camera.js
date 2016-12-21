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

var GoDeviceCamera = function (_React$Component) {
    _inherits(GoDeviceCamera, _React$Component);

    function GoDeviceCamera() {
        _classCallCheck(this, GoDeviceCamera);

        return _possibleConstructorReturn(this, (GoDeviceCamera.__proto__ || Object.getPrototypeOf(GoDeviceCamera)).apply(this, arguments));
    }

    _createClass(GoDeviceCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15c-2.8 0-5 2.2-5 5s2.2 5 5 5c0.2 0 0.4 0 0.7 0-1.9-0.3-3.2-1.9-3.2-3.8 0-2 1.7-3.7 3.7-3.7 1.9 0 3.5 1.4 3.8 3.2 0-0.3 0-0.5 0-0.7 0-2.8-2.2-5-5-5z m15-5h-5l-5-5h-10l-5 5h-5c-1.4 0-2.5 1.1-2.5 2.5v17.5c0 1.4 1.1 2.5 2.5 2.5h30c1.4 0 2.5-1.1 2.5-2.5v-17.5c0-1.4-1.1-2.5-2.5-2.5z m-18.7-2.5h7.5l2.5 2.5h-12.5l2.5-2.5z m-10 22.5c-0.7 0-1.3-0.6-1.3-1.3v-11.2h2.5v-2.5h-2.5v-1.2c0-0.7 0.6-1.3 1.3-1.3h7.1c-0.2 0.1-0.3 0.3-0.5 0.4-3.9 3.9-3.9 10.3 0 14.2l3 2.9h-9.6z m13.7-2.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5 7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5z m12.5-8.7l-5.9-6.3h5.9v6.3z' })
                )
            );
        }
    }]);

    return GoDeviceCamera;
}(React.Component);

exports.default = GoDeviceCamera;
module.exports = exports['default'];