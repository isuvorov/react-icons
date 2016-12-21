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

var IoAndroidGlobe = function (_React$Component) {
    _inherits(IoAndroidGlobe, _React$Component);

    function IoAndroidGlobe() {
        _classCallCheck(this, IoAndroidGlobe);

        return _possibleConstructorReturn(this, (IoAndroidGlobe.__proto__ || Object.getPrototypeOf(IoAndroidGlobe)).apply(this, arguments));
    }

    _createClass(IoAndroidGlobe, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m-1.8 30c0.5-1.1 1.7-2.2 0.7-3-0.7-0.6-1.3-1.1-1.8-1.7-0.2-0.1-0.9-1.5-0.7-1.8 0.3-0.7 0.4-1 0.6-1.8 0.2-1-0.3-1.3-1-1.8-1.2-0.7-2.3-1.7-3.4-2.6-0.5-0.4-1.3-0.8-1.6-1.5s-0.3-1.6-0.7-2.2c-1.1-1.5-1-2.6-0.8-4.5 0-0.6-0.1-1.3-0.2-2-2.2 2.5-3.3 5.7-3.3 9.1 0 3.8 1.5 7.2 4.1 9.8 2.3 2.3 5.1 3.6 8.1 4z m11.6-4c1.8-1.8 3-3.9 3.7-6.4-0.7 0.1-1.5-0.1-1.5-0.1s-1.7-1.9-1.8-3.5c-0.2-1.8 0-3.1-0.2-4.5-0.3-1.2-1.6-2.4-2.2-3.6-0.5-1.1-1-2.2-1.5-3.3 0.1 0.1 0.4 0.2 0.5 0.3 0.4-0.1 0.8-0.2 1.1-0.2-1.8-1.2-3.8-1.9-5.9-2.3v0.7l0.3 0.7-1.1 1-0.7-0.2-0.8-0.8-0.8-1-1.1-0.4c-1.2 0.2-2.4 0.6-3.5 1.1v0.5c0.6-0.2 1.3-0.4 1.8-0.6 0.3-0.1 1 0.5 1.3 0.7-0.3 0.4-1.7 1.2-1.7 1.6 0 0.2 0.5 0.5 0.5 0.8 0 0.5-0.1 0.9-0.1 1.3 0.3-0.2 1.6-1.6 1.7-1.6 1.1-0.2 2.8 1.5 2.9 2s-1.7 1.9-2.5 2.7c-0.7 0.6-2 0.9-1.6 1.9 0.2 0.3 0.8 1.5 0.4 1.8-0.5 0.4-1.1-0.7-1.3-0.9-0.7-0.8-2.1-0.5-3-0.5 0 1.3-0.1 2.4 1.2 3.3 1.1 0.9 2.3 2 3.6 2.6 1 0.5 2.8-0.6 3.7 0.1 1.3 0.8 2.3 1.6 3.7 2.2 0.6 0.3 2.6 1.6 2 2.5-0.4 0.6-0.8 1.1-1.1 1.8s-1 1.5-1.5 1.9c-0.7 0.5-1.3 1.3-1.7 2.3 2.7-0.6 5.2-1.8 7.2-3.9z' })
                )
            );
        }
    }]);

    return IoAndroidGlobe;
}(React.Component);

exports.default = IoAndroidGlobe;
module.exports = exports['default'];