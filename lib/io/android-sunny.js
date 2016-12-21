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

var IoAndroidSunny = function (_React$Component) {
    _inherits(IoAndroidSunny, _React$Component);

    function IoAndroidSunny() {
        _classCallCheck(this, IoAndroidSunny);

        return _possibleConstructorReturn(this, (IoAndroidSunny.__proto__ || Object.getPrototypeOf(IoAndroidSunny)).apply(this, arguments));
    }

    _createClass(IoAndroidSunny, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 12.5c-2 0-3.9 0.8-5.3 2.2s-2.2 3.3-2.2 5.3 0.8 3.9 2.2 5.3 3.3 2.2 5.3 2.2 3.9-0.8 5.3-2.2 2.2-3.3 2.2-5.3-0.8-3.9-2.2-5.3-3.3-2.2-5.3-2.2z m1.6-10v5h-3.2v-5h3.2z m10.1 3.4l2.4 2.4-3 3-2.3-2.4z m-23.4 0l2.9 3-2.3 2.4-3-3z m11.7 4.1c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z m17.5 8.4v3.2h-5v-3.2h5z m-30 0v3.2h-5v-3.2h5z m23.6 10.4l3 2.9-2.4 2.4-3-3z m-22.2 0l2.4 2.3-3 3-2.4-2.4z m12.7 3.7v5h-3.2v-5h3.2z' })
                )
            );
        }
    }]);

    return IoAndroidSunny;
}(React.Component);

exports.default = IoAndroidSunny;
module.exports = exports['default'];