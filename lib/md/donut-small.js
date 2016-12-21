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

var MdDonutSmall = function (_React$Component) {
    _inherits(MdDonutSmall, _React$Component);

    function MdDonutSmall() {
        _classCallCheck(this, MdDonutSmall);

        return _possibleConstructorReturn(this, (MdDonutSmall.__proto__ || Object.getPrototypeOf(MdDonutSmall)).apply(this, arguments));
    }

    _createClass(MdDonutSmall, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.6 24.8c1.7-0.5 2.6-1.8 3.2-3.2h11.8c-0.7 7.9-6.6 14.3-15 15v-11.8z m3.2-6.4c-0.6-1.4-1.5-2.7-3.2-3.2v-11.8c8.4 0.7 14.3 7.1 15 15h-11.8z m-6.4-3.2c-1.7 0.7-3.4 2.6-3.4 4.8s1.7 4.1 3.4 4.8v11.8c-8.4-0.8-15-7.9-15-16.6s6.6-15.8 15-16.6v11.8z' })
                )
            );
        }
    }]);

    return MdDonutSmall;
}(React.Component);

exports.default = MdDonutSmall;
module.exports = exports['default'];