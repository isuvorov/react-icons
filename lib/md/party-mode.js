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

var MdPartyMode = function (_React$Component) {
    _inherits(MdPartyMode, _React$Component);

    function MdPartyMode() {
        _classCallCheck(this, MdPartyMode);

        return _possibleConstructorReturn(this, (MdPartyMode.__proto__ || Object.getPrototypeOf(MdPartyMode)).apply(this, arguments));
    }

    _createClass(MdPartyMode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 28.4c4.6 0 8.4-3.8 8.4-8.4 0-0.5-0.1-1.1-0.2-1.6h-3.5c0.1 0.5 0.3 1.1 0.3 1.6 0 2.7-2.3 5-5 5h-6.6c1.5 2 3.9 3.4 6.6 3.4z m0-16.8c-4.6 0-8.4 3.8-8.4 8.4 0 0.5 0.1 1.1 0.2 1.6h3.5c-0.1-0.5-0.3-1.1-0.3-1.6 0-2.7 2.3-5 5-5h6.6c-1.5-2-3.9-3.4-6.6-3.4z m13.4-5c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h5.4l3-3.2h10l3.1 3.2h5.3z' })
                )
            );
        }
    }]);

    return MdPartyMode;
}(React.Component);

exports.default = MdPartyMode;
module.exports = exports['default'];