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

var MdAccessible = function (_React$Component) {
    _inherits(MdAccessible, _React$Component);

    function MdAccessible() {
        _classCallCheck(this, MdAccessible);

        return _possibleConstructorReturn(this, (MdAccessible.__proto__ || Object.getPrototypeOf(MdAccessible)).apply(this, arguments));
    }

    _createClass(MdAccessible, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.4 30h3.4c-0.7 3.8-4.1 6.6-8.2 6.6-4.6 0-8.2-3.6-8.2-8.2 0-4.1 2.8-7.5 6.6-8.2v3.4c-2 0.7-3.4 2.6-3.4 4.8 0 2.7 2.3 5 5 5 2.2 0 4.1-1.4 4.8-3.4z m-4.8-14.8c0-2.4 2.6-4.5 5-3.1h0.1v0.1c0.4 0.1 0.7 0.4 1 0.7l2.2 2.4c1.7 1.8 4.2 3.1 6.7 3.1v3.2c-2.8 0-6.1-1.4-8.2-3.2v5.7h5c1.8 0 3.2 1.6 3.2 3.4v9.1h-3.2v-8.2h-8.4c-1.8 0-3.4-1.6-3.4-3.4v-9.8z m0-8.6c0-1.8 1.5-3.2 3.4-3.2s3.4 1.4 3.4 3.2-1.5 3.4-3.4 3.4-3.4-1.5-3.4-3.4z' })
                )
            );
        }
    }]);

    return MdAccessible;
}(React.Component);

exports.default = MdAccessible;
module.exports = exports['default'];