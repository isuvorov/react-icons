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

var MdLocationSearching = function (_React$Component) {
    _inherits(MdLocationSearching, _React$Component);

    function MdLocationSearching() {
        _classCallCheck(this, MdLocationSearching);

        return _possibleConstructorReturn(this, (MdLocationSearching.__proto__ || Object.getPrototypeOf(MdLocationSearching)).apply(this, arguments));
    }

    _createClass(MdLocationSearching, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 31.6c6.5 0 11.6-5.1 11.6-11.6s-5.1-11.6-11.6-11.6-11.6 5.1-11.6 11.6 5.1 11.6 11.6 11.6z m14.9-13.2h3.5v3.2h-3.5c-0.8 7-6.3 12.5-13.3 13.3v3.5h-3.2v-3.5c-7-0.8-12.5-6.3-13.3-13.3h-3.5v-3.2h3.5c0.8-7 6.3-12.5 13.3-13.3v-3.5h3.2v3.5c7 0.8 12.5 6.3 13.3 13.3z' })
                )
            );
        }
    }]);

    return MdLocationSearching;
}(React.Component);

exports.default = MdLocationSearching;
module.exports = exports['default'];