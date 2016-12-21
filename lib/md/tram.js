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

var MdTram = function (_React$Component) {
    _inherits(MdTram, _React$Component);

    function MdTram() {
        _classCallCheck(this, MdTram);

        return _possibleConstructorReturn(this, (MdTram.__proto__ || Object.getPrototypeOf(MdTram)).apply(this, arguments));
    }

    _createClass(MdTram, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 23.4v-8.4h-16.8v8.4h16.8z m-8.4 7.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m11.6-2.7c0 2.8-1.4 5.2-4.3 5.2h0.2l2.5 2.5v0.7h-3.4l-3.2-3.2h-6.4l-3.2 3.2h-3.8v-0.7l2.7-2.7c-2.4-0.5-4.3-2.6-4.3-5v-14.1c0-4.6 4.7-5.6 9.9-5.7l1.3-2.5h-8v-2.5h16.8v2.5h-5.5l-1.3 2.5c5.7 0.1 10 1.1 10 5.7v14.1z' })
                )
            );
        }
    }]);

    return MdTram;
}(React.Component);

exports.default = MdTram;
module.exports = exports['default'];