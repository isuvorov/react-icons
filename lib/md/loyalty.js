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

var MdLoyalty = function (_React$Component) {
    _inherits(MdLoyalty, _React$Component);

    function MdLoyalty() {
        _classCallCheck(this, MdLoyalty);

        return _possibleConstructorReturn(this, (MdLoyalty.__proto__ || Object.getPrototypeOf(MdLoyalty)).apply(this, arguments));
    }

    _createClass(MdLoyalty, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 25.5c0.7-0.8 1.2-1.8 1.2-3 0-2.3-1.9-4.1-4.1-4.1-1.2 0-2.2 0.4-3 1.1l-1.3 1.3-1.1-1.3c-0.8-0.8-1.8-1.1-3-1.1-2.3 0-4.1 1.8-4.1 4.1 0 1.2 0.4 2.2 1.1 3l7.1 7.1z m-19.7-13.9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z' })
                )
            );
        }
    }]);

    return MdLoyalty;
}(React.Component);

exports.default = MdLoyalty;
module.exports = exports['default'];