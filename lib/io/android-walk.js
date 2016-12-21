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

var IoAndroidWalk = function (_React$Component) {
    _inherits(IoAndroidWalk, _React$Component);

    function IoAndroidWalk() {
        _classCallCheck(this, IoAndroidWalk);

        return _possibleConstructorReturn(this, (IoAndroidWalk.__proto__ || Object.getPrototypeOf(IoAndroidWalk)).apply(this, arguments));
    }

    _createClass(IoAndroidWalk, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.6 8.8c-1.7 0-3.1-1.5-3.1-3.2s1.4-3.1 3.1-3.1 3.2 1.4 3.2 3.1-1.5 3.2-3.2 3.2z m0 9.3l-1.5-2.9-1.6 4.8 4.5 7.5v10h-3v-7.5l-3.9-5.3-4.5 12.8h-3.1l6.3-25-3.2 1.3v6.2h-3.1v-8.7l8.7-3c0.3-0.1 0.8-0.1 1-0.1 1 0 1.8 0.5 2.4 1.4l3.5 5.4h5.6v3.1h-8.1z' })
                )
            );
        }
    }]);

    return IoAndroidWalk;
}(React.Component);

exports.default = IoAndroidWalk;
module.exports = exports['default'];