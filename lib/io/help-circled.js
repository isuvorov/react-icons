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

var IoHelpCircled = function (_React$Component) {
    _inherits(IoHelpCircled, _React$Component);

    function IoHelpCircled() {
        _classCallCheck(this, IoHelpCircled);

        return _possibleConstructorReturn(this, (IoHelpCircled.__proto__ || Object.getPrototypeOf(IoHelpCircled)).apply(this, arguments));
    }

    _createClass(IoHelpCircled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m1.6 25.5c0-1.4-1-2.4-2.3-2.4-1.3 0-2.3 0.9-2.3 2.3s0.9 2.3 2.1 2.3c1.4 0 2.5-0.7 2.5-2.2z m3.8-10c0.5-0.7 0.9-1.7 0.9-2.8 0-1.8-0.7-3.1-1.9-4-1.4-1-2.9-1.4-4.9-1.4-1.5 0-2.6 0.3-3.6 1-1.5 1-2.2 2.6-2.2 5.3h3.8c0-0.7-0.1-1.5 0.3-2.1s1-1.2 2-1.2 1.5 0.2 2 0.9c0.4 0.5 0.6 1.1 0.6 1.8 0 0.5-0.3 1.1-0.6 1.5-0.2 0.3-0.5 0.6-0.8 0.8 0 0-2 1.2-2.7 2.4-0.6 0.8-0.7 1.8-0.8 3.2 0 0 0 0.3 0.3 0.3h3.1s0.4-0.3 0.4-0.3c0-0.5 0-1.2 0.1-1.5 0.2-0.6 0.5-1 0.9-1.4l1.1-0.7c1-0.7 1.7-1.3 2-1.8z' })
                )
            );
        }
    }]);

    return IoHelpCircled;
}(React.Component);

exports.default = IoHelpCircled;
module.exports = exports['default'];