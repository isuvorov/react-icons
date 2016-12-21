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

var MdCameraRear = function (_React$Component) {
    _inherits(MdCameraRear, _React$Component);

    function MdCameraRear() {
        _classCallCheck(this, MdCameraRear);

        return _possibleConstructorReturn(this, (MdCameraRear.__proto__ || Object.getPrototypeOf(MdCameraRear)).apply(this, arguments));
    }

    _createClass(MdCameraRear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 10c1.8 0 3.3-1.6 3.3-3.4s-1.5-3.2-3.3-3.2-3.4 1.4-3.4 3.2 1.5 3.4 3.4 3.4z m8.4-10c1.8 0 3.2 1.6 3.2 3.4v23.2c0 1.8-1.4 3.4-3.2 3.4h-11.8l5 5-5 5v-3.4h-8.2v-3.2h8.2v-3.4h-5c-1.8 0-3.2-1.6-3.2-3.4v-23.2c0-1.8 1.4-3.4 3.2-3.4h16.8z m-5 33.4h8.2v3.2h-8.2v-3.2z' })
                )
            );
        }
    }]);

    return MdCameraRear;
}(React.Component);

exports.default = MdCameraRear;
module.exports = exports['default'];