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

var FaNewspaperO = function (_React$Component) {
    _inherits(FaNewspaperO, _React$Component);

    function FaNewspaperO() {
        _classCallCheck(this, FaNewspaperO);

        return _possibleConstructorReturn(this, (FaNewspaperO.__proto__ || Object.getPrototypeOf(FaNewspaperO)).apply(this, arguments));
    }

    _createClass(FaNewspaperO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.9 12.5h-7.5v7.5h7.5v-7.5z m2.5 12.5v2.5h-12.5v-2.5h12.5z m0-14.9v12.4h-12.5v-12.4h12.5z m12.4 14.9v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-5v2.5h-10v-2.5h10z m0-4.9v2.4h-10v-2.4h10z m-29.8 18.6v-18.6h-2.5v18.6q0 0.5 0.4 0.9t0.8 0.3 0.9-0.3 0.4-0.9z m32.3 0v-21.1h-29.8v21.1q0 0.6-0.3 1.2h28.8q0.5 0 0.9-0.3t0.4-0.9z m2.5-23.6v23.6q0 1.5-1.1 2.6t-2.7 1.1h-32.3q-1.5 0-2.6-1.1t-1.1-2.6v-21.1h5v-2.5h34.8z' })
                )
            );
        }
    }]);

    return FaNewspaperO;
}(React.Component);

exports.default = FaNewspaperO;
module.exports = exports['default'];