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

var MdPictureInPictureAlt = function (_React$Component) {
    _inherits(MdPictureInPictureAlt, _React$Component);

    function MdPictureInPictureAlt() {
        _classCallCheck(this, MdPictureInPictureAlt);

        return _possibleConstructorReturn(this, (MdPictureInPictureAlt.__proto__ || Object.getPrototypeOf(MdPictureInPictureAlt)).apply(this, arguments));
    }

    _createClass(MdPictureInPictureAlt, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 31.7v-23.4h-30v23.4h30z m3.4-0.1q0 1.4-1.1 2.4t-2.3 1h-30q-1.3 0-2.3-1t-1.1-2.4v-23.3q0-1.3 1.1-2.3t2.3-1h30q1.3 0 2.3 1t1.1 2.3v23.3z m-6.8-13.2v10h-13.2v-10h13.2z' })
                )
            );
        }
    }]);

    return MdPictureInPictureAlt;
}(React.Component);

exports.default = MdPictureInPictureAlt;
module.exports = exports['default'];