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

var MdPeopleOutline = function (_React$Component) {
    _inherits(MdPeopleOutline, _React$Component);

    function MdPeopleOutline() {
        _classCallCheck(this, MdPeopleOutline);

        return _possibleConstructorReturn(this, (MdPeopleOutline.__proto__ || Object.getPrototypeOf(MdPeopleOutline)).apply(this, arguments));
    }

    _createClass(MdPeopleOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 10.9c-1.8 0-3.4 1.4-3.4 3.2s1.6 3.4 3.4 3.4 3.4-1.6 3.4-3.4-1.6-3.2-3.4-3.2z m0 9.1c-3.2 0-5.9-2.7-5.9-5.9s2.7-5.7 5.9-5.7 5.9 2.5 5.9 5.7-2.7 5.9-5.9 5.9z m-15-9.1c-1.8 0-3.4 1.4-3.4 3.2s1.6 3.4 3.4 3.4 3.4-1.6 3.4-3.4-1.6-3.2-3.4-3.2z m0 9.1c-3.2 0-5.9-2.7-5.9-5.9s2.7-5.7 5.9-5.7 5.9 2.5 5.9 5.7-2.7 5.9-5.9 5.9z m23.4 9.1v-2c0-0.9-4.3-3-8.4-3-1.8 0-3.5 0.5-5 1 0.5 0.6 0.9 1.2 0.9 2v2h12.5z m-15 0v-2c0-0.9-4.3-3-8.4-3s-8.4 2.1-8.4 3v2h16.8z m6.6-7.5c3.6 0 10.9 1.9 10.9 5.5v4.5h-36.8v-4.5c0-3.6 7.3-5.5 10.9-5.5 2 0 5.1 0.7 7.5 1.8 2.4-1.1 5.5-1.8 7.5-1.8z' })
                )
            );
        }
    }]);

    return MdPeopleOutline;
}(React.Component);

exports.default = MdPeopleOutline;
module.exports = exports['default'];