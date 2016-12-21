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

var MdStopScreenShare = function (_React$Component) {
    _inherits(MdStopScreenShare, _React$Component);

    function MdStopScreenShare() {
        _classCallCheck(this, MdStopScreenShare);

        return _possibleConstructorReturn(this, (MdStopScreenShare.__proto__ || Object.getPrototypeOf(MdStopScreenShare)).apply(this, arguments));
    }

    _createClass(MdStopScreenShare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm11.6 25q2.3-3.1 6.1-4.1l-2.6-2.6q-2.5 2.4-3.5 6.7z m-7.6-22.1l32.9 32.9-2.1 2.1-4.6-4.5h-30.2v-3.4h6.6q-1.4 0-2.3-1t-0.9-2.3v-16.7q0-1.5 1.1-2.4l-2.6-2.6z m32.6 23.8q0 2-1.7 2.9l-9.2-9.2 2.7-2.5-6.8-6.2v3.5q-0.1 0.1-0.4 0.1t-0.4 0.1l-8.8-8.7h21.4q1.3 0 2.3 1t0.9 2.3v16.7z m-1.2 3.3h4.6v3.4h-1.3z' })
                )
            );
        }
    }]);

    return MdStopScreenShare;
}(React.Component);

exports.default = MdStopScreenShare;
module.exports = exports['default'];