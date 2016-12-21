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

var MdBeachAccess = function (_React$Component) {
    _inherits(MdBeachAccess, _React$Component);

    function MdBeachAccess() {
        _classCallCheck(this, MdBeachAccess);

        return _possibleConstructorReturn(this, (MdBeachAccess.__proto__ || Object.getPrototypeOf(MdBeachAccess)).apply(this, arguments));
    }

    _createClass(MdBeachAccess, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.1 14.7c-5.3-5.2-12.5-7-19.1-4.8 5-0.6 11.4 2 16.6 7.2l-9.5 9.5c-5.2-5.2-7.8-11.6-7.2-16.6-2.2 6.6-0.4 13.8 4.8 19.1l-4.8 4.7c-6.5-6.5-6.5-17.2 0-23.8 0-0.1 0-0.1 0.1-0.1 6.6-6.5 17.3-6.5 23.8 0z m-7.2 9.6l2.4-2.4 10.7 10.8-2.4 2.3z' })
                )
            );
        }
    }]);

    return MdBeachAccess;
}(React.Component);

exports.default = MdBeachAccess;
module.exports = exports['default'];