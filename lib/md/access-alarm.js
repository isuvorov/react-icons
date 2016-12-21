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

var MdAccessAlarm = function (_React$Component) {
    _inherits(MdAccessAlarm, _React$Component);

    function MdAccessAlarm() {
        _classCallCheck(this, MdAccessAlarm);

        return _possibleConstructorReturn(this, (MdAccessAlarm.__proto__ || Object.getPrototypeOf(MdAccessAlarm)).apply(this, arguments));
    }

    _createClass(MdAccessAlarm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.4q4.8 0 8.2-3.5t3.4-8.3-3.4-8.2-8.2-3.4-8.2 3.4-3.4 8.2 3.4 8.3 8.2 3.5z m0-26.8q6.3 0 10.6 4.5t4.4 10.5-4.4 10.6-10.6 4.4-10.6-4.4-4.4-10.6 4.4-10.5 10.6-4.5z m0.9 6.8v8.7l6.6 3.9-1.2 2.1-7.9-4.7v-10h2.5z m-7.8-7.8l-7.6 6.4-2.1-2.5 7.6-6.4z m23.5 3.9l-2.1 2.6-7.6-6.5 2.1-2.5z' })
                )
            );
        }
    }]);

    return MdAccessAlarm;
}(React.Component);

exports.default = MdAccessAlarm;
module.exports = exports['default'];