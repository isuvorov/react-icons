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

var IoAndroidBulb = function (_React$Component) {
    _inherits(IoAndroidBulb, _React$Component);

    function IoAndroidBulb() {
        _classCallCheck(this, IoAndroidBulb);

        return _possibleConstructorReturn(this, (IoAndroidBulb.__proto__ || Object.getPrototypeOf(IoAndroidBulb)).apply(this, arguments));
    }

    _createClass(IoAndroidBulb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 13.3c-2 0-3.9 0.8-5.3 2.2s-2.2 3.3-2.2 5.3c0 2.6 1.4 5.1 3.8 6.5l1.2 0.7v7h5v-7l1.3-0.7c1.1-0.7 2.1-1.6 2.7-2.7 0.7-1.2 1-2.4 1-3.8 0-2-0.8-3.9-2.2-5.3s-3.3-2.2-5.3-2.2z m1.6-10.8v5h-3.2v-5h3.2z m10.1 4.2l2.4 2.4-3 2.9-2.3-2.3z m-23.4 0l2.9 3-2.3 2.3-3-2.9z m11.7 4.1c5.5 0 10 4.5 10 10 0 3.7-2 6.9-5 8.7v8h-10v-8c-3-1.8-5-5-5-8.7 0-5.5 4.5-10 10-10z m17.5 8.3v3.3h-5v-3.3h5z m-30 0v3.3h-5v-3.3h5z' })
                )
            );
        }
    }]);

    return IoAndroidBulb;
}(React.Component);

exports.default = IoAndroidBulb;
module.exports = exports['default'];