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

var MdSync = function (_React$Component) {
    _inherits(MdSync, _React$Component);

    function MdSync() {
        _classCallCheck(this, MdSync);

        return _possibleConstructorReturn(this, (MdSync.__proto__ || Object.getPrototypeOf(MdSync)).apply(this, arguments));
    }

    _createClass(MdSync, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 30v-5l6.6 6.6-6.6 6.8v-5c-7.3 0-13.4-6.1-13.4-13.4 0-2.6 0.8-5.1 2.2-7.1l2.4 2.4c-0.8 1.4-1.2 3-1.2 4.7 0 5.5 4.5 10 10 10z m0-23.4c7.3 0 13.4 6.1 13.4 13.4 0 2.6-0.8 5.1-2.1 7.1l-2.5-2.4c0.8-1.4 1.2-3 1.2-4.7 0-5.5-4.5-10-10-10v5l-6.6-6.6 6.6-6.8v5z' })
                )
            );
        }
    }]);

    return MdSync;
}(React.Component);

exports.default = MdSync;
module.exports = exports['default'];