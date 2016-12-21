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

var GoDashboard = function (_React$Component) {
    _inherits(GoDashboard, _React$Component);

    function GoDashboard() {
        _classCallCheck(this, GoDashboard);

        return _possibleConstructorReturn(this, (GoDashboard.__proto__ || Object.getPrototypeOf(GoDashboard)).apply(this, arguments));
    }

    _createClass(GoDashboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 18.1c-2.5 0-4.4 2-4.4 4.4s1.9 4.4 4.4 4.4 4.3-2 4.3-4.4c0-0.3 0-0.7-0.1-1 3.2-3.7 8.1-9.5 10.8-12.7 0.9-1.2-0.1-2.2-1.3-1.3-3.3 2.7-9.1 7.6-12.8 10.8-0.3-0.1-0.6-0.2-0.9-0.2z m1.2-8.1c0-0.7-0.6-1.3-1.3-1.3s-1.2 0.6-1.2 1.3 0.6 1.2 1.2 1.2 1.3-0.5 1.3-1.2z m7.5 10c0 0.7 0.6 1.2 1.2 1.2s1.3-0.5 1.3-1.2-0.6-1.3-1.3-1.3-1.2 0.6-1.2 1.3z m-13.8-10c-0.6 0-1.2 0.6-1.2 1.2s0.6 1.3 1.2 1.3 1.3-0.6 1.3-1.3-0.6-1.2-1.3-1.2z m-2.5 5c0-0.7-0.5-1.3-1.2-1.3s-1.3 0.6-1.3 1.3 0.6 1.2 1.3 1.2 1.2-0.5 1.2-1.2z m-3.7 5c0 0.7 0.6 1.2 1.2 1.2s1.3-0.5 1.3-1.2-0.6-1.3-1.3-1.3-1.2 0.6-1.2 1.3z m17.5-8.8c0-0.6-0.6-1.2-1.3-1.2s-1.2 0.6-1.2 1.2 0.6 1.3 1.2 1.3 1.3-0.6 1.3-1.3z m8.5 2l-2.7 3.5c0.3 1 0.5 2.1 0.5 3.3 0 6.9-5.6 12.5-12.5 12.5s-12.5-5.6-12.5-12.5c0-6.9 5.5-12.5 12.5-12.5 2.5 0 4.9 0.8 6.9 2.1l3.1-2.4c-2.8-2.1-6.2-3.4-10-3.4-9 0-16.3 7.2-16.3 16.2s7.3 16.3 16.3 16.3 16.2-7.3 16.2-16.3c0-2.4-0.6-4.8-1.5-6.8z' })
                )
            );
        }
    }]);

    return GoDashboard;
}(React.Component);

exports.default = GoDashboard;
module.exports = exports['default'];