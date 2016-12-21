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

var MdPeople = function (_React$Component) {
    _inherits(MdPeople, _React$Component);

    function MdPeople() {
        _classCallCheck(this, MdPeople);

        return _possibleConstructorReturn(this, (MdPeople.__proto__ || Object.getPrototypeOf(MdPeople)).apply(this, arguments));
    }

    _createClass(MdPeople, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 21.6c3.9 0 11.8 2 11.8 5.9v4.1h-10v-4.1c0-2.5-1.4-4.4-3.3-5.8 0.5-0.1 1.1-0.1 1.5-0.1z m-13.2 0c3.9 0 11.6 2 11.6 5.9v4.1h-23.4v-4.1c0-3.9 7.9-5.9 11.8-5.9z m0-3.2c-2.8 0-5-2.3-5-5s2.2-5 5-5 4.9 2.2 4.9 5-2.2 5-4.9 5z m13.2 0c-2.7 0-5-2.3-5-5s2.3-5 5-5 5 2.2 5 5-2.2 5-5 5z' })
                )
            );
        }
    }]);

    return MdPeople;
}(React.Component);

exports.default = MdPeople;
module.exports = exports['default'];