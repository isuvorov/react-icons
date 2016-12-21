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

var MdDataUsage = function (_React$Component) {
    _inherits(MdDataUsage, _React$Component);

    function MdDataUsage() {
        _classCallCheck(this, MdDataUsage);

        return _possibleConstructorReturn(this, (MdDataUsage.__proto__ || Object.getPrototypeOf(MdDataUsage)).apply(this, arguments));
    }

    _createClass(MdDataUsage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 31.6c3.7 0 7-1.7 9.1-4.3l4.3 2.5c-3 4.2-7.8 6.8-13.4 6.8-9.2 0-16.6-7.4-16.6-16.6 0-8.7 6.5-15.7 15-16.6v5c-5.7 0.8-10 5.7-10 11.6 0 6.5 5.1 11.6 11.6 11.6z m1.6-28.2c8.5 0.9 15 7.9 15 16.6 0 2.4-0.4 4.8-1.4 6.8l-4.3-2.6c0.4-1.3 0.7-2.7 0.7-4.2 0-5.9-4.3-10.8-10-11.6v-5z' })
                )
            );
        }
    }]);

    return MdDataUsage;
}(React.Component);

exports.default = MdDataUsage;
module.exports = exports['default'];