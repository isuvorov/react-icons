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

var TiFlagOutline = function (_React$Component) {
    _inherits(TiFlagOutline, _React$Component);

    function TiFlagOutline() {
        _classCallCheck(this, TiFlagOutline);

        return _possibleConstructorReturn(this, (TiFlagOutline.__proto__ || Object.getPrototypeOf(TiFlagOutline)).apply(this, arguments));
    }

    _createClass(TiFlagOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.6 7.2c-0.6-0.3-1.3-0.1-1.8 0.4-2.1 2.1-5.5 2.1-7.6 0-3.4-3.4-9-3.4-12.4 0-0.3 0.3-0.5 0.7-0.5 1.1v21.7c0 0.9 0.8 1.7 1.7 1.7s1.7-0.8 1.7-1.7v-7.6c2.1-1.6 5.2-1.5 7.1 0.4 3.4 3.5 9 3.5 12.4 0 0.3-0.3 0.5-0.7 0.5-1.1v-13.4c0-0.6-0.4-1.2-1.1-1.5z m-11.8 2.7c2.6 2.6 6.4 3.2 9.5 1.9v3.9c-2.4 1.5-5.6 1.2-7.7-0.9-2.4-2.4-6-2.9-8.9-1.5v-3.8c2.1-1.7 5.2-1.5 7.1 0.4z m2.4 11c-1.7-1.7-4-2.6-6.2-2.6-1.1 0-2.3 0.3-3.3 0.7v-3.9c2.4-1.5 5.6-1.2 7.7 0.9 1.6 1.5 3.6 2.3 5.6 2.3 1.1 0 2.3-0.3 3.3-0.8v3.8c-2.1 1.7-5.2 1.5-7.1-0.4z' })
                )
            );
        }
    }]);

    return TiFlagOutline;
}(React.Component);

exports.default = TiFlagOutline;
module.exports = exports['default'];