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

var MdPersonOutline = function (_React$Component) {
    _inherits(MdPersonOutline, _React$Component);

    function MdPersonOutline() {
        _classCallCheck(this, MdPersonOutline);

        return _possibleConstructorReturn(this, (MdPersonOutline.__proto__ || Object.getPrototypeOf(MdPersonOutline)).apply(this, arguments));
    }

    _createClass(MdPersonOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 21.6c4.5 0 13.4 2.3 13.4 6.8v5h-26.8v-5c0-4.5 8.9-6.8 13.4-6.8z m0-15c3.7 0 6.6 3.1 6.6 6.8s-2.9 6.6-6.6 6.6-6.6-3-6.6-6.6 2.9-6.8 6.6-6.8z m0 18.2c-4.9 0-10.2 2.5-10.2 3.6v1.8h20.4v-1.8c0-1.1-5.3-3.6-10.2-3.6z m0-15c-2 0-3.5 1.6-3.5 3.6s1.6 3.4 3.5 3.4 3.5-1.5 3.5-3.4-1.6-3.6-3.5-3.6z' })
                )
            );
        }
    }]);

    return MdPersonOutline;
}(React.Component);

exports.default = MdPersonOutline;
module.exports = exports['default'];