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

var MdSyncDisabled = function (_React$Component) {
    _inherits(MdSyncDisabled, _React$Component);

    function MdSyncDisabled() {
        _classCallCheck(this, MdSyncDisabled);

        return _possibleConstructorReturn(this, (MdSyncDisabled.__proto__ || Object.getPrototypeOf(MdSyncDisabled)).apply(this, arguments));
    }

    _createClass(MdSyncDisabled, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.4 6.6l-4 4c2.4 2.4 4 5.7 4 9.4 0 2.6-0.8 5-2.1 7l-2.5-2.4c0.7-1.4 1.2-3 1.2-4.6 0-2.7-1.2-5.2-3-7l-3.6 3.6v-10h10z m-28.6 2.4l2.1-2.1 26.1 26.2-2.1 2.1-3.9-3.9c-1.1 0.7-2.4 1.3-3.7 1.6v-3.4c0.4-0.2 0.9-0.4 1.3-0.7l-13.4-13.4c-0.7 1.4-1.2 3-1.2 4.6 0 2.7 1.2 5.2 3 7l3.6-3.6v10h-10l4-4c-2.4-2.4-4-5.7-4-9.4 0-2.6 0.8-5 2.1-7z m11.8 1.5c-0.4 0.2-0.8 0.4-1.2 0.7l-2.4-2.5c1.1-0.7 2.3-1.3 3.6-1.6v3.4z' })
                )
            );
        }
    }]);

    return MdSyncDisabled;
}(React.Component);

exports.default = MdSyncDisabled;
module.exports = exports['default'];