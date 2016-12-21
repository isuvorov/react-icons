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

var MdAvTimer = function (_React$Component) {
    _inherits(MdAvTimer, _React$Component);

    function MdAvTimer() {
        _classCallCheck(this, MdAvTimer);

        return _possibleConstructorReturn(this, (MdAvTimer.__proto__ || Object.getPrototypeOf(MdAvTimer)).apply(this, arguments));
    }

    _createClass(MdAvTimer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 20c0-0.9 0.7-1.6 1.6-1.6s1.8 0.7 1.8 1.6-0.8 1.6-1.8 1.6-1.6-0.7-1.6-1.6z m20 0c0 0.9-0.7 1.6-1.6 1.6s-1.8-0.7-1.8-1.6 0.8-1.6 1.8-1.6 1.6 0.7 1.6 1.6z m-11.6-15h1.6c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15c0-4.9 2.3-9.2 6-12v0l11.3 11.3-2.3 2.3-9.1-8.9c-1.6 2-2.5 4.5-2.5 7.3 0 6.5 5.1 11.6 11.6 11.6s11.6-5.1 11.6-11.6c0-5.9-4.3-10.8-10-11.6v3.2h-3.2v-6.6z m0 23.4c0-1 0.7-1.8 1.6-1.8s1.6 0.8 1.6 1.8-0.7 1.6-1.6 1.6-1.6-0.7-1.6-1.6z' })
                )
            );
        }
    }]);

    return MdAvTimer;
}(React.Component);

exports.default = MdAvTimer;
module.exports = exports['default'];