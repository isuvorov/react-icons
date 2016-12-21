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

var MdSubway = function (_React$Component) {
    _inherits(MdSubway, _React$Component);

    function MdSubway() {
        _classCallCheck(this, MdSubway);

        return _possibleConstructorReturn(this, (MdSubway.__proto__ || Object.getPrototypeOf(MdSubway)).apply(this, arguments));
    }

    _createClass(MdSubway, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 26.5v-11.5c0-4.4-4.5-5-10-5-5 0-10 0.6-10 5v11.5c0 2.4 2 4.4 4.4 4.4l-1.9 1.8v0.7h2.8l2.5-2.5h4.7l2.5 2.5h2.5v-0.7l-1.9-1.8c2.4 0 4.4-2 4.4-4.4z m-0.3-21.8c4.4 1.7 6.9 5.4 6.9 10.1v21.8h-33.2v-21.8c0-4.7 2.5-8.4 6.9-10.1 3-1.2 6.6-1.3 9.7-1.3s6.7 0.1 9.7 1.3z m-18 10.3h16.7v8.4h-16.7v-8.4z m0.8 11.6c0-0.9 0.7-1.6 1.6-1.6s1.8 0.7 1.8 1.6-0.8 1.8-1.8 1.8-1.6-0.8-1.6-1.8z m11.6 0c0-0.9 0.8-1.6 1.8-1.6s1.6 0.7 1.6 1.6-0.7 1.8-1.6 1.8-1.8-0.8-1.8-1.8z' })
                )
            );
        }
    }]);

    return MdSubway;
}(React.Component);

exports.default = MdSubway;
module.exports = exports['default'];