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

var IoHappyOutline = function (_React$Component) {
    _inherits(IoHappyOutline, _React$Component);

    function IoHappyOutline() {
        _classCallCheck(this, IoHappyOutline);

        return _possibleConstructorReturn(this, (IoHappyOutline.__proto__ || Object.getPrototypeOf(IoHappyOutline)).apply(this, arguments));
    }

    _createClass(IoHappyOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.7 22.7c0.7 0.3 0.9 1 0.6 1.6-1.9 3.6-6.1 5.7-10.8 5.7-4.8 0-9.2-2.3-10.9-5.8-0.3-0.6 0-1.3 0.7-1.6 0.1-0.1 0.4-0.1 0.5-0.1 0.5 0 0.9 0.2 1.1 0.7 1.3 2.7 4.7 4.3 8.6 4.3 3.8 0 7.2-1.6 8.6-4.4 0.2-0.4 0.6-0.6 1.1-0.6 0.2 0 0.4 0.1 0.5 0.2z m2.1-4.7c0.4 0.6 0.3 1.4-0.3 1.8-0.3 0.1-0.5 0.2-0.8 0.2-0.4 0-0.9-0.2-1.1-0.5s-0.6-0.7-1.3-0.7-1.1 0.4-1.4 0.7-0.7 0.5-1.1 0.5c-0.3 0-0.5-0.1-0.8-0.2-0.6-0.5-0.7-1.2-0.2-1.8 0.9-1 1.8-1.7 3.5-1.7s2.7 0.7 3.5 1.7z m-17.5 0c0.4 0.6 0.3 1.4-0.3 1.8-0.3 0.1-0.5 0.2-0.8 0.2-0.4 0-0.9-0.2-1.1-0.5s-0.6-0.7-1.3-0.7-1.1 0.4-1.4 0.7-0.7 0.5-1.1 0.5c-0.3 0-0.5-0.1-0.8-0.2-0.6-0.5-0.7-1.2-0.2-1.8 0.9-1 1.8-1.7 3.5-1.7s2.7 0.7 3.5 1.7z m5.2-15.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m10.6 28.1c2.8-2.8 4.4-6.6 4.4-10.6s-1.6-7.8-4.4-10.6-6.6-4.4-10.6-4.4-7.8 1.6-10.6 4.4-4.4 6.6-4.4 10.6 1.6 7.8 4.4 10.6 6.6 4.4 10.6 4.4 7.8-1.6 10.6-4.4z' })
                )
            );
        }
    }]);

    return IoHappyOutline;
}(React.Component);

exports.default = IoHappyOutline;
module.exports = exports['default'];