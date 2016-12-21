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

var MdSmokingRooms = function (_React$Component) {
    _inherits(MdSmokingRooms, _React$Component);

    function MdSmokingRooms() {
        _classCallCheck(this, MdSmokingRooms);

        return _possibleConstructorReturn(this, (MdSmokingRooms.__proto__ || Object.getPrototypeOf(MdSmokingRooms)).apply(this, arguments));
    }

    _createClass(MdSmokingRooms, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.7 17c3.1 0 5.8 2.2 5.8 5.3v2.7h-2.5v-2.2c0-2.2-1.6-3.3-3.3-3.3h-2.6c-3 0-5.5-2.6-5.5-5.7s2.5-5.5 5.5-5.5v2.5c-1.7 0-3 1.2-3 2.9s1.3 3.3 3 3.3h2.6z m4.7-4.1c3.1 1.5 5.2 4.7 5.2 8.4v3.7h-2.5v-3.7c0-3.8-2.8-6.8-6.6-6.8v-2.5c1.7 0 3.1-1.4 3.1-3.1s-1.4-3-3.1-3v-2.5c3.1 0 5.6 2.5 5.6 5.5 0 1.6-0.7 3-1.7 4z m-1.4 13.7h2.5v5h-2.5v-5z m4.1 0h2.5v5h-2.5v-5z m-30.7 0h25v5h-25v-5z' })
                )
            );
        }
    }]);

    return MdSmokingRooms;
}(React.Component);

exports.default = MdSmokingRooms;
module.exports = exports['default'];